const template = `
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
`

export default template