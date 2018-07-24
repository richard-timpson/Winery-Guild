const template = 
`
<v-app v-cloak>
    <v-content>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12 display-1>
                    {{ wineryNameU }}
                </v-flex>
                <v-flex xs12>
                    <v-parallax v-bind:src="src"></v-parallax>
                </v-flex>
                

                
                <v-flex xs12>
                    <v-dialog max-width="250px">
                        <v-btn round slot="activator"> Call </v-btn>
                        <v-card>
                            <v-card-title><span>Call</span></v-card-title>
                            <v-divider />
                            <v-card-text>{{ wineryView[0].phone }}</v-card-text>
                        </v-card>
                    </v-dialog>

                    <a v-bind:href="website" target="_blank">
                        <v-btn slot="activator" round> Website </v-btn>
                    </a>    
                    
                    <a v-bind:href="email">
                        <v-btn slot="activator" round> Email </v-btn>
                    </a>
                </v-flex>

                <v-flex xs12 style="background-color: #C62828; padding: 1rem; margin-top: 1rem; margin-bottom: 2rem;">
                    <p class="display-1 font-weight-thin">{{ wineryView[0].description }}</p>
                </v-flex>
                <v-flex xs12>
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYRgFCVHTcMUmOi3gyyiTzpfDZCH_MAGU&amp;q=32.716382,-116.84840700000001&amp;zoom=10" width="100%" height="320px" frameborder="0" style="border:0" allowfullscreen="">
                    </iframe>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>

`

export default template