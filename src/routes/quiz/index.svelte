<script>
  import { onMount } from "svelte";
  export let quiz;
  onMount(async () => {
    let res = await fetch(
      "https://mydiary.local/wp-json/tutor/v1/quiz-question-answer/16/"
    );
    quiz = await res.json();
  });

  let questions = [
    {
      question:
        "Which of the following special symbol allowed in a variable name?",
      options: ["* (asterisk)", "| (pipeline)", "- (hyphen)", "_ (underscore)"],
      correctIndex: 3,
    },
    {
      question:
        "Which of the following correctly shows the hierarchy of arithmetic operations in C?",
      options: ["/ + * -", "* - / +", "+ - / *", "/ * + -"],
      correctIndex: 3,
    },
    {
      question:
        "Which header file should be included to use functions like malloc() and calloc()?",
      options: ["memory.h", "stdlib.h", "string.h", "dos.h"],
      correctIndex: 1,
    },
    {
      question:
        "Which bitwise operator is suitable for turning off a particular bit in a number?",
      options: ["&& operator", "& operator", "|| operator", "! operator"],
      correctIndex: 1,
    },
    {
      question:
        "What function should be used to free the memory allocated by calloc() ?",
      options: [
        "dealloc();",
        "malloc(variable_name, 0)",
        "free();",
        "memalloc(variable_name, 0)",
      ],
      correctIndex: 2,
    },
  ];
  let answers = new Array(questions.length).fill(null);
  let questionPointer = -1;

  function getScore() {
    let score = answers.reduce((acc, val, index) => {
      if (questions[index].correctIndex == val) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return (score / questions.length) * 100 + "%";
  }

  function restartQuiz() {
    answers = new Array(questions.length).fill(null);
    questionPointer = 0;
  }
</script>

<div class="app">
  {#if questionPointer == -1}
    <div class="start-screen">
      <button
        on:click={() => {
          questionPointer = 0;
        }}
      >
        Start Quiz
      </button>
    </div>
  {:else if !(questionPointer > answers.length - 1)}
    <div class="quiz-screen">
      <div class="main">
        <h2>
          {questions[questionPointer].question}
        </h2>

        <div class="options">
          {#each questions[questionPointer].options as opt, i}
            <button
              class={answers[questionPointer] == i ? "selected" : ""}
              on:click={() => {
                answers[questionPointer] = i;
              }}
            >
              {opt}
            </button>
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
      <h1>
        Your score:{getScore()}
      </h1>

      <button on:click={restartQuiz}> Restar Quiz </button>
    </div>
  {/if}
</div>

<style>
  .app {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
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
