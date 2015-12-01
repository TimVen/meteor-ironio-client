if (Meteor.isServer) {
	
	var iron_mq = Meteor.npmRequire('iron_mq');
	var imq = new iron_mq.Client({token: "XXXXXXXX", project_id: "XXXXXXXX"});

	var iron_worker = Meteor.npmRequire('iron_worker');
	var worker = new iron_worker.Client({token:"XXXXXXXX",project_id:"XXXXXXXX"});

	// Use normally from here

}
