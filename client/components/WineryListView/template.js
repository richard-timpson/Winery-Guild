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
                <p class="display-1 font-weight-thin" v-if="featured.length > 0">Featured</p>
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
                <p class="display-1 font-weight-thin" v-if="premium.length > 0">Premium</p>
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
                <p class="display-1 text-xs-center font-weight-thin" v-if="claimed.length > 0">Claimed</p>
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
                <p class="display-1 font-weight-thin" v-if="unclaimed.length > 0">Unclaimed</p>
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
    </v-container>
</v-content>

`

export default template