<template>
  <b-col class="m-3">
    <b-card header="Shop">
      <b-card-group deck>
        <b-card
          style="min-width: 30%; max-width: 30%"
          img-src="../assets/dragonInBarnOnPaper-min.png"
          class="m-3"
          align="center"
          v-for="item in shop"
          :key="item.id"
        >
          <b-card-text><strong>Name: </strong> {{ item.name }}</b-card-text>
          <b-card-text><strong>Cost: </strong> {{ item.cost }}</b-card-text>
          <hr />
          <b-button size="sm" variant="success" @click="buyItem(item.id)"
            >Buy Item!</b-button
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
    ...mapGetters(['shop', 'game']),
  },
  async mounted() {
    try {
      await this.$store.dispatch('setShop', this.game.gameId);
      console.log('Hello shop');
    } catch (error) {
      throw new Error(error);
    }
  },
  methods: {
    async buyItem(id) {
      const gameId = this.game.gameId;
      try {
        let success = await this.$store.dispatch('buy', {
          id,
          gameId,
        });
        if (success) {
          this.showToast('Item bought', 'SUCCESS');
          console.log('Item bought');
        } else {
          alert("couldn't buy");
        }
        await this.$store.dispatch('setShop', this.game.gameId);
      } catch (error) {
        throw new Error(error);
      }
      console.log(id);
    },
  },
};
</script>

<style></style>
