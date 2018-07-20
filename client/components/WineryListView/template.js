const template = `
<v-content>
    <v-container fluid grid-list-md text-xs-center id="mainContainer">
        <v-layout row wrap justify-center>
            <v-flex xs12>
                <!-- <navigation></navigation> -->
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs12>
                <p class="display-1 font-weight-thin" v-if="featured != null">Featured</p>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs2 v-for="item in featured">
                <v-card :height="80">
                    <v-container fill-height align-center>
                        <v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="80px" contain></v-card-media>	
                        <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs12>
                <p class="display-1 font-weight-thin" v-if="premium != null">Premium</p>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex v-for="item in premium" xs3>
                <v-card :height="80">
                    <v-container fill-height align-center>
                        <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs12>
                <p class="display-1 text-xs-center font-weight-thin" v-if="claimed != null">Claimed</p>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs2 v-for="item in claimed">
                <v-card :height="80">
                    <v-container fill-height align-center>	
                        <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs12>
                <p class="display-1 font-weight-thin" v-if="unclaimed != null">Unclaimed</p>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs2 v-for="item in unclaimed">
                <v-card :height="80">
                    <v-container fill-height align-center>	
                        <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-container fluid id="footerCont">
            <v-layout align-end fill-height row justify-center>
                <v-flex xs12>
                    <v-footer dark height="auto">
                        <v-card flat tile class="flex">
                            <v-card-text>
                                <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                                    <v-icon size="24px">{{ icon }}</v-icon>
                                </v-btn>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-avatar id="wineGlass" size="48px">
                                <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/edce7f6eeee3062a0077fc33d57d65d3.svg" alt="avatar">
                            </v-avatar>
                            <v-card-text class="title white--text font-weight-light">WINERY GUILD</v-card-text>
                            <v-divider></v-divider>
                            <v-card-text class="white--text">&copy;Some Company Co. 2018</v-card-text>
                        </v-card>
                    </v-footer>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</v-content>

`

export default template