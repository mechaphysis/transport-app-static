interface iVM {
    getViewList(name?: string): any
}

class ResultsViewModel {
    service: any
    _data: object[] = []
    dataSource: string = 'fake'

    getViewList(table) {
        switch(table) {
            case 'results-table':
                return this._data
        }
    }

    read() {
        console.log('read from viewmodel')
        if(this.dataSource === 'fake') {
            let fakedata = [
                { departure: '01:00', destination: '02:00', company: 'Acme'},
                { departure: '03:00', destination: '04:00', company: 'Becme'},
                { departure: '05:00', destination: '06:00', company: 'Cecme'},
                { departure: '07:00', destination: '08:00', company: 'Decme'}
            ]

            return this._data = [].concat(fakedata)
        }
        //place call to service read here

    }
}