const template = `

        <v-layout align-end row>
            <v-flex xs12 align-center>
                <v-footer dark height="auto">
                    <v-card flat tile class="flex">
                        
                        <v-card-text class="text-xs-center">

                            <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                                <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                        
                        <v-divider></v-divider>
                        <v-layout justify-center align-center>
                        <v-avatar id="wineGlass">
                            <img style="height: 200px;" src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/5dffa69173cc03a8b11d6801389135b4.svg" alt="avatar">
                        </v-avatar>
                        </v-layout>



                        <v-card-text class="text-xs-center title white--text font-weight-light">WINERY GUILD</v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="text-xs-center white--text">&copy;Some Company Co. 2018</v-card-text>

                    </v-card>
                </v-footer>

            </v-flex>
        </v-layout>

`

export default template