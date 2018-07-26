const template = `
<v-app v-cloak>
    <v-content class="bgGrad">
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-card class="cardForm"> 
                        <v-form v-model="valid">
                            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            <v-text-field v-model="phone" label="Phone" required></v-text-field>
                            <v-text-field v-model="wineryInf" label="Winery" required></v-text-field>
                            <v-btn round>Claim This Winery</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>

            
                <v-container>
                    <v-flex>
                        
                            <h1 class="display-2">How Our Listings Work</h1>
                            <p class="headline font-weight-thin">
                                We currently have most of the wineries in the united states listed in out directory as unclaimed. Which means we have very little information to present about these unclaimed wineries.

                                In an effort to give our users the best experience possible we rank upgraded wineries (claimed or premium) higher than the basic unclaimed wineries.
                            </p>
                        
                    </v-flex>
                </v-container>
            
                    <v-flex xs4>
                        <img id="phone" src="../../lib/phone.png">
                    </v-flex>
                
            </v-layout>
            <v-layout row justify-center>
                <v-flex>
                    <img id="laptop" src="../../lib/laptop.png">
                </v-flex>
                <v-container>
                    <v-flex>
                        
                        <h1 class="display-2">Claimed Listings</h1>
                            
                        <h2 class="title"><i class="material-icons">done</i>Profile Page</h2>
                        <p class="headline font-weight-thin">After you claim your listing we’ll use your website to gather all the information we need for your profile page so you won’t have to do any work.</p>
                        <h3 class="title"><i class="material-icons">done</i>Upgraded Listing</h3>
                        <p class="headline font-weight-thin">Your listing will show up in the claimed section including your logo, location and bolder title so you’ll stand out and reach more customers. (then claim your listing button)</p>
                        
                    </v-flex>
                </v-container>
            </v-layout>
            <v-layout row justify-center>
                <v-container>
                    <v-flex>
                        <h1 class="display-2">Premium Listings</h1>
                        <p class="headline">Wineries with a premium listing can expect to reach significantly more customers than those with free listings.</p>
                        <h2 class="title"><i class="material-icons">done</i>Premium listings rank higher than claimed listings so they are found by more visitors.</h2>
                        <h3 class="title"><i class="material-icons">done</i>They are bigger & bolder so they stand out more.</h3>
                        <h4 class="title"><i class="material-icons">done</i>We run paid advertising to your local customer base which dramatically increases the number of local wine lovers you reach.</h4>
                    </v-flex>

                </v-container>
                <v-flex>
                    <img src="../../lib/feat.png">
                </v-flex>
            </v-layout>

            <v-layout row justify-center>

                <v-container>
                    <v-flex>
                        <h5 class="display-2">Featured Wineries</h5>
                        <p class="headline">Featured wineries can expect to reach more customers than any other listings.</p>
                        <h6 class="title"><i class="material-icons">done</i>Featured wineries are given a permanent spot in the featured section of our website.</h6>
                        <h7 class="title"><i class="material-icons">done</i>We’ll fly out to your winery, produce “Cinematic Documentary” style film telling your story and showing what makes you unique.</h7>
                        <br>
                        <h8 class="title"><i class="material-icons">done</i>And we’ll run paid advertising in your area to attract new customers into your tasting room.</h8>
                        <br>
                    </v-flex>
                </v-container>
    </v-content>
</v-app>


<!--Featured Wineries
Featured wineries can expect to reach more customers than any other listings.

Featured wineries are given a permanent spot in the featured section of our website. We’ll fly out to your winery, produce “Cinematic Documentary” style film telling your story and showing what makes you unique. And we’ll run paid advertising in your area to attract new customers into your tasting room.
To be featured by Winery Guild you simply need to claim your free listing then schedule an exploration meeting to see if we're a good fit for each other.-->
`

export default template