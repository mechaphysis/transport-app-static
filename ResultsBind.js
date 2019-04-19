class ResultsBind {
	constructor(){
		this.viewModel = new ResultsViewModel()
	}
	
	getViewList(table_id) {
		console.log('---getViewList called')
		let _this = this
		let columnconfig = [
			{title: 'Saída', field:'departure'},
			{title: 'Chegada', field:'destination'},
			{title: 'Empresa', field: 'company'}
		]

		Promise.all([this.viewModel.read()])
			.then( data => _this.setTable(table_id, columnconfig, data[0]))
	}

	setTable(table, columns, data) {
		console.log('---set Table called')
		let _this = this
		_this._table = new Tabulator('#'+ table, {
			layout: 'fitColumns',
			tooltips: true,
			pagination: 'local',
			paginationSize: 7,
			movableColumns: true,
			resizableRows: true,
			columns: columns,
		})
		_this._table.setData(data)
	}
}