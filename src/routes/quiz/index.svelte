<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/posts.json");

    if (res.ok) {
      console.log("res is ok");
      const posts = await res.json();
      console.log(posts);

      return {
        props: { posts },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import { onMount } from "svelte";

  onMount(async () => {
    let res = await fetch(
      "https://mydiary.local/wp-json/tutor/v1/quiz-question-answer/16/"
    );
    let data = await res.json();
  });
  export let quiz;
</script>
