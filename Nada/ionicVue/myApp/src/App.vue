<template>
<ion-list>
    <ion-list-header>
      <ion-label>
        EasyMarket Client
      </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Tienda</ion-label>
      <ion-select placeholder="Select One">
        <ion-select-option value="f">D1</ion-select-option>
        <ion-select-option value="m">JUSTO Y BUENO</ion-select-option>
      </ion-select>
    </ion-item>


  </ion-list>
 <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { warning } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
     IonCard, IonCardContent, IonCardSubtitle, IonCardTitle
  },
  setup() {
    return { warning };
  }
});
</script>