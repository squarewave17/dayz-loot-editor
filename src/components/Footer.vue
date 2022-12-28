<template>
  <footer className="footer p-3 bg-gray-700 text-primary-content footer-center">
    <div>
      <p>Copyright &copy; {{ footerYear }}</p>
    </div>
  </footer>
</template>

<script setup>
  import { ref } from "vue";

  const footerYear = ref(new Date().getFullYear());
</script>
