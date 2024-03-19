<template>
  <section class="mt-5">
    <div class="container">
      <BookList :books="books"></BookList>
    </div>
  </section>
</template>

<script>
import BookList from "../components/BookList.vue";
import books from "../db";
export default {
  name: "BooksView",
  components: {
    BookList,
  },
  data() {
    return {
      books: books,
    };
  },
};
</script>

<style scoped>

</style>
