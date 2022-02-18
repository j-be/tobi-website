<script setup lang="ts">
import * as Constants from '../constants';
</script>

<template>
    <nav  id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#page-top">{{ Constants.NAME }}</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">Info</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Videos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Kontakt</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
