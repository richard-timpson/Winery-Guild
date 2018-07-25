const template = 
`
<v-app v-cloak>
    <v-content>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12 display-1>
                </v-flex>
                <v-flex xs12>
                    <v-parallax v-bind:src="winery[0].background"></v-parallax>
                    <v-avatar size="149" style="position: relative; top:-450px; border: 10px solid white;"><img v-bind:src="winery[0].logo"></v-avatar>
                </v-flex>
                
                <v-flex xs6>
                    <iframe v-bind:src="winery[0].videourl"></iframe>
                </v-flex>
                
                <v-flex xs12>
                    <v-dialog max-width="250px">
                        <v-btn round slot="activator"> Call </v-btn>
                        <v-card>
                            <v-card-title><span>Call</span></v-card-title>
                            <v-divider />
                            <v-card-text>{{ winery[0].phone }}</v-card-text>
                        </v-card>
                    </v-dialog>
                
                
                    <a v-bind:href="urlink" target="_blank">
                        <v-btn round> Website </v-btn>
                    </a>    
                    
                    <a v-bind:href="elink">
                        <v-btn round> Email </v-btn>
                    </a>
                </v-flex>

                <v-flex xs12 style="background-color: #C62828; padding: 1rem;">
                    <p class="display-1 font-weight-thin" v-if="winery[0].description">{{ winery[0].description }}</p>
                </v-flex>
                <v-flex xs12>
                    <iframe v-bind:src="mapLink" width="100%" height="320px" frameborder="0" style="border:0" allowfullscreen="">
                    </iframe>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>

`

export default template