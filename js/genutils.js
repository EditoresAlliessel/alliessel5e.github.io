"use strict";class GenUtil{static getFromTable(table,roll,maxZero=100){const it={};Object.assign(it,table.find((it=>it.min===roll||it.max!=null&&roll>=it.min&&roll<=(it.max===0?maxZero:it.max))));Object.keys(it).forEach((k=>{if(typeof it[k]==="function"){it[k]=it[k]()}}));if(it.display&&!it.result)it.result=it.display;if(it.display)it.display=Renderer.get().render(it.display);if(it.result)it.result=Renderer.get().render(it.result);return it}}