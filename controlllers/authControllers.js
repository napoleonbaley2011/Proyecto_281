const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')
exports.register = async (req, res)=>{

    try {
        const ci = req.body.ci
        const nombre = req.body.nombre
        const apellido = req.body.apellido
        const direccion = req.body.direccion
        const email = req.body.email
        const pass = req.body.pass
        const ins = req.body.inst
        const academico = req.body.academico
        const numero = req.body.num
        const fecha = req.body.fecha
        let passHash = await bcryptjs.hash(pass,8)
        conexion.query('Insert into participante set ?',{ci_par:ci, nombres:nombre, apellidos:apellido, direccion:direccion, email:email, clave:passHash,institucion:ins, grado_academico:academico, numero:numero, fechanaci:fecha},(error, results)=>{
            if(error){console.log(error)}
            res.redirect('/')
        })

    } catch (error) {
        console.log(error)
    }
    


}

exports.login =  async(req, res)=>{
    try {
        const ci = req.body.ci
        const pass = req.body.pass
        //console.log(ci+' '+pass)
        if(!ci || !pass){
             res.render('login' ,{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingresar un CI y/o Contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
             })
        }else{
            conexion.query('Select * From participante Where ci_par = ?' , [ci], async (error,resultado)=>{

                console.log(resultado)
                //res.send(resultado)
                /*if(resultado.length > 0 && await(bcryptjs.compare(pass, resultado[3].clave))){
                    
                }else{
                    conexion.query('Select * From expositor Where ci=?',[ci], async(error,resultado)=>{
                        if(resultado.length >0 && await(bcryptjs.compare(pass, resultado[6].clave))){

                        }else{
                            conexion.query('Select * From participante Where ci=?',[ci], async(error, resultado)=>{
                                if(){

                                }
                            })
                        }
                    })
                }*/
            })
        }
    } catch (error) {
        
    }
}

exports.login