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
    
        <v-menu :open-on-hover="true" :nudge-bottom="14" light :min-width="176" :max-height="300" :close-on-content-click="false" offset-y>
            
            <v-btn slot="activator">Filter</v-btn>
            
                <v-list class="menuFilter">
                    <v-radio-group v-model="query">
                        <v-list-tile v-for="item in filterState" :key="item">
                                <v-radio v-bind:value="item" :label="item"></v-radio>
                        </v-list-tile>
                    </v-radio-group>
                </v-list>

        </v-menu>
    

    <v-spacer></v-spacer>
    
    <router-link to ='/claim'>
        <v-btn>Claim</v-btn>
    </router-link>
    <router-link to ='/upgrade'>
        <v-btn>Upgrade</v-btn>
    </router-link>

</v-toolbar>
`

export default template