$(document).ready(function () {
	// ����viewModel,����dataTable�Լ�grid��ʹ�õ�function����
    viewModel = {
        dataTable: new u.DataTable({
            meta: {
                "name": "",
                "surname":"",
                "currency": ""
            }
        }),
		// �������֮ǰ�������¼�
        onBeforeClickFun1:function(obj){
            obj.gridObj.setGridEditType('default');
            return true;
        },
    }
	// ����APP
    app = u.createApp({
        el: 'body',
        model: viewModel
    });
	// ������ݵ�dataTable��
    var data = [{
                "name": "Teagan",
                "surname": "Prohaska",
                "currency": "200"
            }, {
                "name": "Andy",
                "surname": "Gaylord",
                "currency": "300"
            }]
    viewModel.dataTable.removeAllRows();
    viewModel.dataTable.setSimpleData(data);
});