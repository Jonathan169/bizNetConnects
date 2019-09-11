module.exports=(Sequelize,DataTypes)=>{
    var Visitor = Sequelize.define("Visitor",{
        email:{
            type:DataTypes.STRING,
            required:true,
            unique:true,
        },
        companyName:{
            type:DataTypes.STRING,
            required:true,
        },
        industry:{
            type:DataTypes.STRING,
        },
    })
    return Visitor
}