export function catchCard({first,rare,name,quote,number,count}){
 return {tier:rare?'rare':first?'new':'repeat',label:(first?'NEW！ ':'GET！ ')+(rare?'隠し・限定':'仲間を獲得'),name,detail:`No.${number} ／ 獲得 ${count}体`,quote:quote?`「${quote}」`:''};
}
