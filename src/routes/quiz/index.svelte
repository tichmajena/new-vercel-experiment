<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/quiz.json");

    if (res.ok) {
      const jsonData = await res.json();
      const quiz = await jsonData.data;

      return {
        props: { quiz },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import Timer from "$lib/Timer/index.svelte";
  import Clock from "$lib/Clock/index.svelte";
  export let quiz;
  console.log(quiz);

  let questions = quiz,
    elapsedTime = 0,
    elapsedGameTime = 0,
    now = 0,
    countDownTimer = null,
    pauseTime = 0,
    quizDuration = 5,
    quizTime = quizDuration,
    gameTimerId = null,
    gameTime = 15;

  let analog = false;

  let answers = new Array(questions.length).fill("answer");
  let questionPointer = -1;

  function getScore() {
    let score = answers.reduce((zzero, selectedAnswer, quizIndex) => {
      if (
        questions[quizIndex].question_answers[selectedAnswer].is_correct == 1
      ) {
        return zzero + 1;
      }
      return zzero;
    }, 0);
    return (score / questions.length) * 100 + "%";
  }

  function restartQuiz() {
    answers = new Array(questions.length).fill(null);
    questionPointer = 0;
  }

  let getAns = (opt) => {
    let option = opt.answer_title.split("$");
    return option[0];
  };

  let getImg = (opt) => {
    let image = opt.answer_title.split("$");
    return image[1];
  };

  function start() {
    questions = quiz;
    questionPointer = 0;
    chachaya();
  }

  function clear(id) {
    clearInterval(id);
  }

  function gameTimer() {
    quizTime--;
    gameTime--;
    console.log(quizTime);

    if (quizTime === 0 && gameTime >= 0) {
      questionPointer++;
      quizTime += quizDuration;
    } else if (gameTime <= 0 && quizTime === 0) {
      console.log("Game Over");
      clear(gameTimerId);
      questionPointer++;
    }
  }

  function newGameTimer() {
    let duration = quizDuration * 1000;
    let gameDuration = gameTime * 1000;
    let everyMilliSecond = Date.now();

    elapsedTime = now + duration - everyMilliSecond + pauseTime;

    elapsedGameTime = now + gameDuration - everyMilliSecond + pauseTime;

    if (elapsedTime <= 0 && elapsedGameTime > 0) {
      console.log("Adding");
      //questionPointer++;
      elapsedTime += duration;
    } else if (elapsedGameTime <= 0 && elapsedTime <= 0) {
      console.log("Game Over");
      clear(countDownTimer);
      (elapsedGameTime = 0), (elapsedTime = 0);

      //questionPointer++;
    }
  }

  function countDown() {
    countDownTimer = setInterval(newGameTimer);
  }

  function chachaya() {
    now = Date.now();
    countDown();
  }

  function pause() {
    clearInterval(countDownTimer);
    pauseTime = elapsedTime;
  }

  function stopCountDown() {
    elapsedTime = 0;
    clearInterval(countDownTimer);
  }
</script>

{#if analog}
  <Clock />
{/if}

<div class="hidden">
  <button
    class="px-2 py-1 mb-3 ml-20 text-white bg-yellow-500"
    on:click={chachaya}>Start</button
  >
  <button class="px-2 py-1 mb-3 text-white bg-yellow-700" on:click={pause}
    >Pause</button
  >
  <button
    class="px-2 py-1 mb-3 text-white bg-yellow-900"
    on:click={stopCountDown}>Stop</button
  >
</div>

<div class="app">
  <Timer {elapsedTime} />
  <Timer elapsedTime={elapsedGameTime} />
  {#if questionPointer == -1}
    <div class="start-screen">
      <button on:click={start}> Start Quiz </button>
    </div>
  {:else if !(questionPointer > answers.length - 1)}
    <div class="quiz-screen">
      <div class="main">
        <h2>{questions[questionPointer].question_title}</h2>

        <div class="options">
          {#each questions[questionPointer].question_answers as opt, i}
            <div class="w-24 ">
              <img src={getImg(opt)} alt="" />
              <button
                class={answers[questionPointer] == i ? "selected" : ""}
                on:click={() => {
                  answers[questionPointer] = i;
                  console.log(answers);
                }}
              >
                {getAns(opt)}
              </button>
            </div>
          {/each}
        </div>
      </div>

      <div class="footer">
        <div class="progress-bar">
          <div style="width:{(questionPointer / questions.length) * 100}%" />
        </div>

        <div class="buttons">
          <button
            disabled={questionPointer === 0}
            on:click={() => {
              questionPointer--;
            }}
          >
            &lt;
          </button>
          <button
            on:click={() => {
              questionPointer++;
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  {:else}
    <div class="score-screen">
      <h1>Your score:{getScore()}</h1>

      <button on:click={restartQuiz}> Restar Quiz </button>
    </div>
  {/if}
</div>

<style>
  .app {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
  }

  .app > div {
    width: 100%;
    height: 100%;
  }

  .app .start-screen,
  .app .score-screen {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .app .start-screen button,
  .app .score-screen button {
    padding: 10px 20px;
    background: #4a77dc;
    color: #eee;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
  }

  .app .quiz-screen .main {
    padding: 50px;
  }

  .app .quiz-screen .main .options {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .app .quiz-screen .main .options button {
    width: 45%;
    border-radius: 30px;
    margin: 10px 0px;
    background-color: lightgrey;
    padding: 10px 0px;
    border: 1px solid gray;
  }

  .app .quiz-screen .main .options button.selected {
    background: #111;
    color: #eee;
  }

  .app .quiz-screen .footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;
  }

  .app .quiz-screen .footer > div {
    margin: 0px 10px;
  }

  .app .quiz-screen .footer .progress-bar {
    width: 150px;
    height: 10px;
    background: #aaa;
    border-radius: 10px;
    overflow: hidden;
  }

  .app .quiz-screen .footer .progress-bar div {
    height: 100%;
    background: #4a77dc;
  }
  .app .score-screen {
    flex-direction: column;
  }
  .app .score-screen h1 {
    margin-bottom: 10px;
  }
</style>
