<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Logo />
    </v-app-bar>
    <v-main>
      <div class="content">
        <TableBox />
      </div>
    </v-main>
    <v-footer class="justify-center">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '@/components/Logo';
import TableBox from '@/components/Table/TableBox';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Logo,
    TableBox,
    Footer,
  },
};
</script>
<style lang="scss">
.content {
  max-width: 60%;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (max-width: 1199px) {
    max-width: 80%;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 30px 16px;
  }
}
</style>
