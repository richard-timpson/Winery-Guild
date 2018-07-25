const template = 
`
<v-app v-cloak>
    <v-content>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12 display-1>
                </v-flex>
                <v-flex xs12 style="height: 500px; margin-bottom: 2rem;">
                    <v-parallax v-bind:src="winery.background"></v-parallax>
                    <v-avatar size="200" style="top: -450px;"><img v-bind:src="winery.logo"></v-avatar>
                </v-flex>
                
                <v-flex xs6>
                    <iframe v-bind:src="winery.videourl" style="border: 0; height: 300px; width: 500px;"></iframe>
                </v-flex>
                
                <v-flex xs12>
                    <v-dialog max-width="250px">
                        <v-btn round slot="activator"> Call </v-btn>
                        <v-card>
                            <v-card-title><span>Call</span></v-card-title>
                            <v-divider />
                            <v-card-text>{{ winery.phone }}</v-card-text>
                        </v-card>
                    </v-dialog>
                
                
                    <a v-bind:href="urlink" target="_blank">
                        <v-btn round> Website </v-btn>
                    </a>    
                    
                    <a v-bind:href="elink">
                        <v-btn round> Email </v-btn>
                    </a>
                </v-flex>

                <v-flex xs12>
                    <p v-if="winery.description && winery.description != 'undefined'" style="background-color: #C62828; padding: 1rem;" class="display-1 font-weight-thin">{{ winery.description }}</p>
                    <p v-else></p>
                </v-flex>
                <v-flex xs12>
                    <iframe v-bind:src="mapLink" width="100%" height="500px" style="border: 0;">
                    </iframe>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>

`

export default template