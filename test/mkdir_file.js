var fs = require('fs');
var path = require('path');
console.log(__dirname);
for(let i=0;i<5;i++){
	fs.mkdir(`./第${i+1}个目录`,(err)=>{
		if(err){
			console.log(`创建文件夹${i+1}失败`,err,err);
		}else{
			console.log(`创建文件夹${i+1}成功`);
			fs.writeFile(`./第${i+1}个目录/文件${i+1}.txt`,'hello world',(err)=>{
				if(err){
					console.log(`创建文件${i+1}失败`,err);
				}else{
					fs.readFile(`./第${i+1}个目录/文件${i+1}.txt`,'utf-8',(err,data)=>{
						if(err){
							console.log(`读取文件${i+1}失败`,err);
						}else{
							console.log(`读取文件${i+1}成功`,data);
							
								console.log(__dirname+`/第${i+1}个目录/文件${i+1}.txt`)
								fs.open(path.join(__dirname,`/第${i+1}个目录/文件${i+1}.txt`),'r+',(err,fd)=>{
									if(err){
										console.log(`打开文件${i+1}失败`,err);
									}else{
										console.log(`打开文件${i+1}成功`,fd);
									}
								})
							
							
						}
					})
				}
			})
		}
	})
}

	
	
 