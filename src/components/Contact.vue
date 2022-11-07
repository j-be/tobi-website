<script setup lang="ts">
const phoneNumber = "+39 339 123 45 67";
</script>

<template>
    <section id="contact" class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5">
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Adresse</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50">
                                Raffeinweg 10<br>
                                39010 Tscherms<br>
                                BZ - Italien
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-envelope text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Email</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50"><a href="#!">plattner.tobias@gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-mobile-alt text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Telefon</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50">
                                <a href="tel:+393391234567">+39 348 544 59 41</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="social d-flex justify-content-center">
                <a class="mx-2" href="https://www.instagram.com/stuandl_franz_fpv/">
                    <img height="24" src="../assets/img/instagram.svg">
                </a>
                <a class="mx-2" href="https://www.youtube.com/channel/UCNpi4QATrNY2l3jv_iY6gfg">
                    <img height="24" src="../assets/img/youtube.svg">
                </a>
            </div>
        </div>
    </section>
</template>
