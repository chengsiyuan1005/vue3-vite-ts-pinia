import instance from "@/utils/request";

// 单体电压历史
export const cellVolHis = (code:string):Res<string> => instance.get(`LogMonomerVoltage/count?code=${code}`)

// 单体温度历史
export const cellTempHis = (code:string):Res<string> => instance.get(`LogMonomerTemperature/count?code=${code}`)

// soc历史
export const socHis = (params:any):Res<string> => instance.get('/LogHistoricalSoc/list', params)