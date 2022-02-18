<script setup lang="ts">
import * as Constants from '../constants';
</script>

<template>
    <section id="about" class="about-section text-center">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-8">
                    <h2 class="text-white mb-4">Ihr Drohenvideo - vom Profi!</h2>
                    <p class="text-white-50">
                        {{ Constants.NAME }} bietet Ihnen professionelle Drohnenvideos als Gesamtpaket: Planung, Aufnahme und Schnitt - alles aus einer Hand. 
                    </p>
                    <p class="text-white-50">
                        Mehr Text, der beschreibt warum man das unbedingt haben möchte.
                    </p>
                    <p class="text-white-50">
                        Mega super, mega cool - eh klar. Viel Marketing BlaBla...
                    </p>
                </div>
            </div>
            <img class="img-fluid" src="../assets/img/about.jpg" alt="..." />
        </div>
    </section>
</template>
