<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const images = ['bg-01', 'bg-02', 'bg-03', 'bg-04', 'bg-05', 'bg-06', 'bg-07', 'bg-08'];

const email = ref('');
const password = ref('');
const valid = ref(false);
const dialog = ref(false);
const loading = ref(false);
const error = ref('');

const emailRules = [
  (v: string) => !!v || 'E-mail é obrigatório',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
  (v: string) => v.length >= 5 || 'E-mail deve ter pelo menos 5 caracteres',
  (v: string) => v.length <= 50 || 'E-mail deve ter no máximo 50 caracteres'
];

const passwordRules = [
  (v: string) => !!v || 'Senha é obrigatória',
  (v: string) => v.length >= 1 || 'Senha deve ter pelo menos 1 caracteres'
];

function submitForm(): void {
  clearError();
  if (valid.value) {
    loading.value = true;
    setTimeout(() => {
      const e = true;
      if (e) {
        error.value = 'Usuário ou senha inválida.';
        loading.value = false;
        return;
      }
      loading.value = false;
      dialog.value = false;
    }, 2000);
  }
}

function clearError(): void {
  error.value = '';
}
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
              <v-dialog
                v-model="dialog"
                transition="dialog-top-transition"
                max-width="500"
                persistent
              >
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn v-bind="activatorProps" size="large" color="error" class="max-width" text>
                    Comece a jogar!
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card
                    prepend-icon="mdi-account"
                    title="Acessar minha conta"
                    class="login-dialog"
                  >
                    <v-form v-model="valid" @submit.prevent="submitForm">
                      <v-container>
                        <v-alert
                          density="compact"
                          :text="error"
                          title="Erro"
                          type="error"
                          class="mb-5"
                          v-if="error"
                        ></v-alert>
                        <v-row>
                          <v-col cols="12" md="12">
                            <v-text-field
                              v-model="email"
                              min="0"
                              max="50"
                              :counter="50"
                              :rules="emailRules"
                              label="E-mail"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="12">
                            <v-text-field
                              v-model="password"
                              :rules="passwordRules"
                              label="Senha"
                              hide-details
                              required
                              type="password"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-card-text class="text-center">
                          <v-btn
                            color="primary"
                            type="submit"
                            text
                            variant="tonal"
                            :loading="loading"
                            :disabled="!valid"
                          >
                            Acessar
                          </v-btn>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            class="mx-2"
                            color="white"
                            rounded="xl"
                            variant="text"
                            :disabled="loading"
                            @click="router.push('/register')"
                          >
                            Cadastre-se agora!
                          </v-btn>
                          <v-btn
                            text
                            variant="plain"
                            @click="
                              () => {
                                isActive.value = false;
                                clearError();
                              }
                            "
                            :disabled="loading"
                            >Fechar</v-btn
                          >
                        </v-card-actions>
                      </v-container>
                    </v-form>
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
              <v-btn class="mx-2" color="white" rounded="xl" variant="text">
                {{ new Date().getFullYear() }} - Sugoi Game
              </v-btn>
              <router-link to="/example1" class="footer-link">
                <v-btn class="mx-2" color="white" rounded="xl" variant="text">
                  Política de Privacidade
                </v-btn>
              </router-link>
              <router-link to="/example2" class="footer-link">
                <v-btn class="mx-2" color="white" rounded="xl" variant="text">
                  Regras e Punições
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
  animation: bg 45s linear infinite;
  width: 150%;
}

.bg-01 {
  background-image: url('../assets/images/backgrounds/bg-01.jpg');
}

.bg-02 {
  background-image: url('../assets/images/backgrounds/bg-02.jpg');
}

.bg-03 {
  background-image: url('../assets/images/backgrounds/bg-03.jpg');
}

.bg-04 {
  background-image: url('../assets/images/backgrounds/bg-04.jpg');
}

.bg-05 {
  background-image: url('../assets/images/backgrounds/bg-05.jpg');
}

.bg-06 {
  background-image: url('../assets/images/backgrounds/bg-06.jpg');
}

.bg-07 {
  background-image: url('../assets/images/backgrounds/bg-07.jpg');
}

.bg-08 {
  background-image: url('../assets/images/backgrounds/bg-08.jpg');
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
  background: rgba(0, 0, 0, 0.3);
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

.custom-link {
  color: white;
  text-decoration: none;
}

.custom-link:hover {
  color: white;
  text-decoration: underline;
}

@media screen and (max-width: 1280px) {
  .background {
    animation: bg 29.25s linear infinite;
  }
}

@media screen and (max-width: 736px) {
  .background {
    animation: bg 18s linear infinite;
  }
}

@keyframes bg {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%);
  }
}

.login-dialog {
  background: rgba(17, 17, 17, 0.96);
  color: white;
}
</style>
