import Realm from 'realm'

let SystemSetting = {
	name: 'SystemSetting',
	primaryKey: 'name', 
	properties: {
		name: {type: 'string', indexed: true},
		value: 'string'
	}
}

const realm = new Realm({
	schema: [SystemSetting]
});

export default realm;