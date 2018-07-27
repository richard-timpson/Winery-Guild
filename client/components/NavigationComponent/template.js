const template = `

<v-toolbar style="background-color: #cc3230; z-index: 1000000001;">
    <router-link to ='/'>
        <v-toolbar-side-icon>
            <v-avatar>
                <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/5dffa69173cc03a8b11d6801389135b4.svg" alt="avatar">
            </v-avatar>
        </v-toolbar-side-icon>
    </router-link>
    <v-toolbar-title class="display-1 font-weight-thin">
        Winery Guild
    </v-toolbar-title>

    <v-dialog width="700px" v-model="dialog">                            
        <v-btn slot="activator">Filter</v-btn>
        <v-card width ="700px" height="600px">
                <v-card-title><p class="text-xs-center">Set Filters</p></v-card-title>
                <v-divider></v-divider>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex md4>
                            <v-card-text style="height: 400px; overflow: auto;">
                                <v-radio-group v-model="userState">

                                    <v-radio v-for="item in filterState" name="query" :key="item" v-bind:value="item" :label="item" ></v-radio>

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
                                <v-radio-group v-model="userCity" v-if="userCounty">
                                    <v-radio v-for="item in filterCity"  name="city" :key="item" v-bind:value="item" :label="item"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-title>
                    <v-btn @click ='searchWineries' @click.native="dialog = false">Search</v-btn>
                    <v-btn @click = 'clear'>Clear</v-btn>
                </v-card-title>
        </v-card>
    </v-dialog>
    
    <v-toolbar-title class="display-1 font-weight-thin" v-if="userState">{{ userState }}<span v-if="userCounty"> > {{ userCounty }}</span> <span v-if="userCity"> > {{ userCity }} </span></v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link to ='/upgrade'>
        <v-btn>Upgrade</v-btn>
    </router-link>
    <router-link to ='/admin'>
        <v-btn>Admin</v-btn>
    </router-link>
    
    
</v-toolbar>

`

export default template