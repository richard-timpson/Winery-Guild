const template = `
<v-toolbar style="background-color: #cc3230">
    <router-link to ='/'>
        <v-toolbar-side-icon>
            <v-avatar>
                <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/edce7f6eeee3062a0077fc33d57d65d3.svg" alt="avatar">
            </v-avatar>
        </v-toolbar-side-icon>
    </router-link>
    <v-toolbar-title class="display-1 font-weight-thin">
        Winery Guild
    </v-toolbar-title>

    <v-dialog open-on-hover width="500px">                            
        <v-btn slot="activator">Filter</v-btn>
        <v-card>
            <v-card-title><p class="text-xs-center">Set Filters</p></v-card-title>
            <v-divider></v-divider>
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex md4>
                        <v-card-text style="height: 400px; overflow: auto;">
                            <v-radio-group v-model="userState">
                                    <v-radio v-for="item in filterState" name="query" :key="item" v-bind:value="item" :label="item"></v-radio>
                            </v-radio-group>
                        </v-card-text>
                    </v-flex>
                    <v-flex md4>
                        <v-card-text style="height: 400px; overflow: auto;">
                            <v-radio-group v-model="userCounty" v-if="userState">
                                <v-radio v-for="item in filterCounty" :key="item" v-bind:value="item" :label="item"></v-radio>
                            </v-radio-group>
                        </v-card-text>
                    </v-flex>
                    <v-flex md4>
                        <v-card-text style="height: 400px; overflow: auto;">
                            <v-radio-group v-model="query" v-if="userCounty">
                                <v-radio v-for="item in filterCity"  name="city" :key="item" v-bind:value="item" :label="item"></v-radio>
                                </v-radio-group>
                        </v-card-text>
                    </v-flex>
                    <v-card-actions>
                        <v-btn>Okay</v-btn>
                    </v-card-actions>
                </v-layout>
            </v-container>   
        </v-card>
    </v-dialog>
    


    <v-spacer></v-spacer>
    <router-link to="/wineryView">
        <v-btn>View</v-btn>
    </router-link>
    <router-link to ='/claim'>
        <v-btn>Claim</v-btn>
    </router-link>
    <router-link to ='/upgrade'>
        <v-btn>Upgrade</v-btn>
    </router-link>
    
    
</v-toolbar>
`

export default template