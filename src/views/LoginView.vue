<script setup lang="ts">
const images = ['bg-01', 'bg-02', 'bg-03', 'bg-04', 'bg-05', 'bg-06', 'bg-07', 'bg-08'];
</script>

<template>
  <v-app class="app">
    <v-carousel cycle interval="5000" hide-delimiters :show-arrows="false" height="100vh">
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div :class="['background', image]"></div>
      </v-carousel-item>
    </v-carousel>
    <div class="content-overlay">
      <div class="v-container content d-flex align-center">
        <div class="v-row">
          <div class="v-col">
            <div class="d-flex flex-column justify-center">
              <div class="logo mb-5"></div>
              <div class="text-h5 custom-white mb-5">
                Um MMORPG estratégico gratuito cheio de PvP feito por fãs de One Piece. É um jogo de
                mundo aberto com batalhas em turnos e muito PvP.
              </div>
              <v-dialog transition="dialog-top-transition" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    v-bind="activatorProps"
                    size="large"
                    color="error"
                    class="max-width"
                    text="Comece a jogar!"
                  ></v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card title="Dialog">
                    <v-card-text> Texto aqui </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </div>
          <div class="v-col text-bg">
            <div class="text-h5 custom-white mb-5">A jornada mais incrível da sua vida!</div>
            <div class="text-body-1 custom-white">
              Sugoi Game é um jogo de estratégia online, multiplayer, com uma profundidade
              instigante e ao mesmo tempo desafiadora. Lute contra outros jogadores para provar suas
              habilidades em uma competição cheia de fortes emoções. Os títulos de Rei dos Piratas e
              Almirante de Frota são os cargos mais altos reservados apenas para os melhores
              jogadores!
            </div>
          </div>
        </div>
      </div>
      <v-footer class="footer" app>
        <v-container>
          <v-row>
            <v-col>
              <v-btn class="mx-2" color="white" rounded="xl" variant="text"
                >{{ new Date().getFullYear() }} - Sugoi Game</v-btn
              >
              <router-link to="/example1" class="footer-link">
                <v-btn class="mx-2" color="white" rounded="xl" variant="text"
                  >Política de Privacidade</v-btn
                >
              </router-link>
              <router-link to="/example2" class="footer-link">
                <v-btn class="mx-2" color="white" rounded="xl" variant="text"
                  >Regras e Punições
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </div>
  </v-app>
</template>

<style scoped>
.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: black;
}

.background {
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  color: #333;
}

.bg-01 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-01.jpg');
}

.bg-02 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-02.jpg');
}

.bg-03 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-03.jpg');
}

.bg-04 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-04.jpg');
}

.bg-05 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-05.jpg');
}

.bg-06 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-06.jpg');
}

.bg-07 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-07.jpg');
}

.bg-08 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url('../assets/images/backgrounds/bg-08.jpg');
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.logo {
  background-image: url('../assets/images/layout/logo.png');
  width: 300px;
  height: 170px;
}

.max-width {
  max-width: 200px;
}

.text-bg {
  background: rgba(0, 0, 0, 0.3);
}

.footer {
  background: transparent;
}
</style>
