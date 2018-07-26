const template = `

<v-content>
        <v-container fluid grid-list-md text-xs-center id="mainContainer">
            <v-layout row justify-center>
                <v-flex xs12>
                    <p class="display-1 font-weight-thin" v-if="featured.length > 0">Featured</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                <v-flex xs6 lg4 v-for="item in featured" :key="item._id">
                    <v-card :height ="400">
                        <iframe :src="item.videourl" class="featured-video"></iframe>
                            <v-card :height="80">
                                <router-link :to ="{name: 'winery', params: { state: item.state, county: item.county, city: item.city, _id: item._id}}">
                                    <v-container fill-height align-center>
                                        <img :src="item.logo" class ='featured-logo'>	
                                        <v-card-text class="px-0 featured-title">{{ item.wineryname }}</v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-text class="featured-text"> {{item.city}} {{item.state}}</v-card-text>
                                    </v-container>
                                </router-link>
                            </v-card>
                        
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12>
                    <p class="display-1 font-weight-thin" v-if="premium.length > 0">Premium</p>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex v-for="item in premium" :key="item._id"xs3>
                    <router-link :to="{name: 'winery', params: {state: item.state, county: item.county, city: item.city, _id: item._id}}">
                        <v-card :height="80">
                            <v-container fill-height align-center>
                                <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                            </v-container>
                        </v-card>
                    </router-link>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12>
                    <p class="display-1 text-xs-center font-weight-thin" v-if="claimed.length > 0">Claimed</p>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs2 v-for="item in claimed" :key="item._id">
                    <router-link :to="{name: 'winery', params: {state: item.state, county: item.county, city: item.city, _id: item._id}}">
                        <v-card :height="80">
                            <v-container fill-height align-center>	
                                <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                            </v-container>
                        </v-card>
                    </router-link>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12>
                    <p class="display-1 font-weight-thin" v-if="unclaimed.length > 0">Unclaimed</p>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs2 v-for="item in unclaimed" :key="item._id">
                    <router-link :to="{name: 'winery', params: {state: item.state, county: item.county, city: item.city, _id: item._id}}">
                        <v-card :height="80">
                            <v-container fill-height align-center>	
                                <v-card-text class="px-0">{{ item.wineryname }}</v-card-text>
                            </v-container>
                        </v-card>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>

`

export default template