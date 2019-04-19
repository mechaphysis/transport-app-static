var ResultsViewModel = (function () {
    function ResultsViewModel() {
        this._data = [];
        this.dataSource = 'fake';
    }
    ResultsViewModel.prototype.getViewList = function (table) {
        switch (table) {
            case 'results-table':
                return this._data;
        }
    };
    ResultsViewModel.prototype.read = function () {
        console.log('read from viewmodel');
        if (this.dataSource === 'fake') {
            var fakedata = [
                { departure: '01:00', destination: '02:00', company: 'Acme' },
                { departure: '03:00', destination: '04:00', company: 'Becme' },
                { departure: '05:00', destination: '06:00', company: 'Cecme' },
                { departure: '07:00', destination: '08:00', company: 'Decme' }
            ];
            return this._data = [].concat(fakedata);
        }
    };
    return ResultsViewModel;
}());
