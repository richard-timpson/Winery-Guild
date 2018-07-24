const template = 
`
<v-app v-cloak>
    <v-content>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12 display-1>

                </v-flex>
                <v-flex xs12>
                    <v-parallax></v-parallax>
                </v-flex>
                

                
                <v-flex xs12>
                    <v-dialog max-width="500px">
                        <v-btn round slot="activator"> Call </v-btn>
                        <v-card>
                            <v-card-title><span>Call</span></v-card-title>
                            <v-divider />
                            <v-card-text></v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-btn round> Email </v-btn>
                    <v-btn round> Directions </v-btn>
                    <v-btn round> Website </v-btn>
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