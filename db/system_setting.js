import Db from './db' 

export default const SystemSetting = Db(
	{
		name: 'SystemSetting',
		primaryKey: 'name', 
		properties: {
			{name: 'string', indexed: true},
			value: 'string'
		}
	}
)