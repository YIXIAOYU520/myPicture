/**
 * Created by coffee on 2015/7/22.
 */

var images = require('images');

//ָ��ͼƬ��С��width���룬height��ѡ����height�Զ��ȱ�����
var imageSet =  function(path, size1, callback){

    var size, width, height, image;

    image = images(path);

    size = size1 || 400; //Ĭ�Ͽ�Ϊ400

    if(typeof size == 'object'){
        width = size.width || 400;
        height = size.height;
    }else{
        width = parseInt(size);
    }

    width = parseInt(width);
    height = parseInt(height);

    if(height){
        image.resize(width, height);
    }else{
        image.resize(width);
    }

    callback(image.encode('jpg'));

};

// ����ͼ���С
var imageInfo = function(path, callback){

    var image;

    image = images(path);
    var size = image.size();

    callback(size);

};

// ��������ͼ���С
var imageInfoAll = function(filesPath, callback){

    var filesPathList = [];

    filesPath.forEach(function(path, index){
        var image;
        try{
            image = images(path);
        }catch(e){
            console.log(e);
        }

        if(image){
            var obj = image.size();
            obj.url = path.replace('./uploads', '');
            filesPathList.push(obj);
        }

    });
    console.log(filesPathList);
    callback(filesPathList);
};


exports.imageSet = imageSet;
exports.imageInfo = imageInfo;
exports.imageInfoAll = imageInfoAll;