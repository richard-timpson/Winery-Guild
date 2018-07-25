const template = 
`
<v-container>
    <v-text-field placeholder ="Search for Winery" @keyup.enter.prevent ="getWinery(search)" v-model ='search' type='text'></v-text-field>
    <h1>Add Winery</h1>
        <v-form id="form" @submit.prevent ='updateWinery' enctype ='multipart/form-data'>
            <v-text-field label="Winery Name" name="wineryName" v-model = 'winery.wineryname'></v-text-field>
            <v-text-field label="Winery Owner" name="wineryOwner" v-model = 'winery.wineryowner'></v-text-field>
            <v-text-field label="Permit Number" name="permitNumber" v-model = 'winery.permitnumber'></v-text-field>
            <v-text-field label="Street" name="street" v-model = 'winery.street'></v-text-field>
            <v-text-field label="City" name="city" v-model = 'winery.city'></v-text-field>
            <v-text-field label="State" name="state" v-model = 'winery.state'></v-text-field>
            <v-text-field label="Zipcode" name="zip" v-model = 'winery.zipcode'></v-text-field>
            <v-text-field label="County" name="county" v-model = 'winery.county'></v-text-field>
            <v-text-field label="Latitude" name="lat" v-model = 'winery.lat'></v-text-field>
            <v-text-field label="Longitude" name="lng" v-model = 'winery.lng'></v-text-field>
            <v-text-field label="Status" name="status" v-model = 'winery.status'></v-text-field>
            <v-text-field label="Video Url" name="vidUrl" v-model = 'winery.videourl'></v-text-field>
            <v-text-field label="Website Url" name="webUrl" v-model = 'winery.websiteurl'></v-text-field>
            <input type="file" @change="logoData" id="uploader1" name="logo" style="display: none" accept="*.jpg">
            <v-btn label="Logo" @click="upload1" id="clicker">Logo</v-btn>
            <input type="file" @change="bgData" id="uploader2" name="bgImg" style="display: none" accept="*.jpg">
            <v-btn label="Background Image" @click="upload2" id="clicker">Background</v-btn>
            <v-text-field label="Phone Number" v-model = 'winery.phone'></v-text-field>
            <v-text-field label="Email" v-model = 'winery.email'></v-text-field>
            <v-text-field label="Description" v-model = 'winery.description'></v-text-field>
            <v-text-field label="Logo link" :value = 'winery.logoLink'></v-text-field>
            <v-text-field label ="Background Link" :value = 'winery.backgroundLink'></v-text-field>
            <v-btn type ='submit'>Save</v-btn>
            <v-btn @click="addWinery">Add</V-btn>
        </v-form>

    <img :src= 'winery.logoLink'>
    <img :src= 'winery.backgroundLink'>
</v-container>

`
export default template