const template = `
<v-toolbar style="background-color: #cc3230">

                    <v-toolbar-side-icon>
                        <v-avatar>
                            <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/edce7f6eeee3062a0077fc33d57d65d3.svg" alt="avatar">
                        </v-avatar>
                    </v-toolbar-side-icon>

                    <v-toolbar-title class="display-1 font-weight-thin">
                        Winery Guild
                    </v-toolbar-title>
                    
                    <v-dialog v-model="dialog" scrollable max-width="500px">                            
                        <v-btn slot="activator">Filter</v-btn>
                        <v-card>
                            <v-card-title><p class="text-xs-center">Set Filters</p></v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 400px;">
                                <v-radio-group v-model="query">
                                    <v-radio v-for="item in filterState" :key="item" v-bind:value="item" :label="item"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        <v-card>
                    <v-dialog>                            
                    

                    <v-spacer></v-spacer>
                    
                    <v-btn>Claim</v-btn>
                    <v-btn>Upgrade</v-btn>

</v-toolbar>
`

export default template