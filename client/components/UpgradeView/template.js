const template =
`
<v-app>
	<v-layout row wrap>
	<v-flex xs12>
		<hgroup style="position: relative; box-sizing: border-box; margin-top:10%; text-align: center; white-space:normal; color: white; z-index: 1000000000;">
			<img src="//d1qmdf3vop2l07.cloudfront.net/giant-mallet.cloudvent.net/compressed/7cc0457f59e5c15f4670425c5dca957a.svg" data-cms-original-src="/images/logos/logo-white.svg" style="height: 300px;">
			<h1 class="font-weight-black display-3">Want Us to Feature Your Winery?</h1>
			<h2 class="font-weight-black display-2">Start By Claiming Your Free Listing.</h2>
			<router-link to="/claim">
				<v-btn>Claim your free listing</v-btn>
			</router-link>
		</hgroup>
	</v-flex>
	
	<v-flex xs12>
		<video playsinline="" autoplay="" muted="" loop="" style="object-fit: cover; width: 100%; height:100%; position:absolute; top: 0; left: 0;">
			<source src="//d1qmdf3vop2l07.cloudfront.net/giant-mallet.cloudvent.net/compressed/887ceaee02360ee1f928fd27696f222b.mp4" type="video/mp4" data-cms-original-src="/videos/wineries.mp4">
		</video>
	</v-flex>
</v-layout>
</v-app>
`

export default template