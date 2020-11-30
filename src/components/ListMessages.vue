<template>
  <b-col class="m-3">
    <b-card header="Messages">
      <b-card-group deck>
        <b-card
          style="min-width: 30%; max-width: 30%"
          img-src="../assets/dragonInBarnOnPaper-min.png"
          class="m-3"
          align="center"
          v-for="message in messages"
          :key="message.id"
        >
          <b-card-text
            ><strong>Message: </strong> {{ message.message }}</b-card-text
          >
          <b-card-text
            ><strong>Reward: </strong> {{ message.reward }}</b-card-text
          >
          <b-card-text
            ><strong>Expires in: </strong> {{ message.expiresIn }}</b-card-text
          >
          <b-card-text
            ><strong>Probability: </strong>
            {{ message.probability }}</b-card-text
          >
          <hr />
          <b-button size="sm" variant="success" @click="doQuest(message.adId)"
            >Accept Quest!</b-button
          >
        </b-card>
      </b-card-group>
    </b-card>
  </b-col>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['messages', 'game']),
  },
  methods: {
    async doQuest(adId) {
      const gameId = this.game.gameId;
      try {
        let result = await this.$store.dispatch('solveQuest', {
          adId,
          gameId,
        });

        if (result.success) {
          this.showToast(result.message, 'SUCCESS');
        } else if (!result.success && this.game.lives > 0)
          this.showToast(result.message, 'FAIL');
        else {
          alert('game lost');
        }
        await this.$store.dispatch('setMessages', this.game.gameId);
      } catch (error) {
        this.showToast(error, 'ERROR');
      }
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('setMessages', this.game.gameId);
    } catch (error) {
      console.log('error', error);
    }
  },
};
</script>

<style></style>
