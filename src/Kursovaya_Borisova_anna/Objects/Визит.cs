﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_Borisova_anna
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Визит.
    /// </summary>
    // *** Start programmer edit section *** (Визит CustomAttributes)

    // *** End programmer edit section *** (Визит CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВизитE", new string[] {
            "КодВизита as \'Код визита\'",
            "НачалоСеанса as \'Начало сеанса\'",
            "КонецСеанса as \'Конец сеанса\'",
            "ДатаВизита as \'Дата визита\'",
            "Клиент as \'Клиент\'",
            "Клиент.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Клиент.ФИО"})]
    [AssociatedDetailViewAttribute("ВизитE", "ЗаписьВизита", "ЗаписьВизитаE", true, "", "Табличная часть запись визита", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ВизитE", "Клиент", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ВизитL", new string[] {
            "КодВизита as \'Код визита\'",
            "НачалоСеанса as \'Начало сеанса\'",
            "КонецСеанса as \'Конец сеанса\'",
            "ДатаВизита as \'Дата визита\'",
            "Клиент.ФИО as \'ФИО\'"})]
    public class Визит : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодВизита;
        
        private string fНачалоСеанса;
        
        private string fКонецСеанса;
        
        private System.DateTime fДатаВизита;
        
        private IIS.Kursovaya_Borisova_anna.Клиент fКлиент;
        
        private IIS.Kursovaya_Borisova_anna.DetailArrayOfЗаписьВизита fЗаписьВизита;
        
        // *** Start programmer edit section *** (Визит CustomMembers)

        // *** End programmer edit section *** (Визит CustomMembers)

        
        /// <summary>
        /// ДатаВизита.
        /// </summary>
        // *** Start programmer edit section *** (Визит.ДатаВизита CustomAttributes)

        // *** End programmer edit section *** (Визит.ДатаВизита CustomAttributes)
        public virtual System.DateTime ДатаВизита
        {
            get
            {
                // *** Start programmer edit section *** (Визит.ДатаВизита Get start)

                // *** End programmer edit section *** (Визит.ДатаВизита Get start)
                System.DateTime result = this.fДатаВизита;
                // *** Start programmer edit section *** (Визит.ДатаВизита Get end)

                // *** End programmer edit section *** (Визит.ДатаВизита Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Визит.ДатаВизита Set start)

                // *** End programmer edit section *** (Визит.ДатаВизита Set start)
                this.fДатаВизита = value;
                // *** Start programmer edit section *** (Визит.ДатаВизита Set end)

                // *** End programmer edit section *** (Визит.ДатаВизита Set end)
            }
        }
        
        /// <summary>
        /// КодВизита.
        /// </summary>
        // *** Start programmer edit section *** (Визит.КодВизита CustomAttributes)

        // *** End programmer edit section *** (Визит.КодВизита CustomAttributes)
        public virtual int КодВизита
        {
            get
            {
                // *** Start programmer edit section *** (Визит.КодВизита Get start)

                // *** End programmer edit section *** (Визит.КодВизита Get start)
                int result = this.fКодВизита;
                // *** Start programmer edit section *** (Визит.КодВизита Get end)

                // *** End programmer edit section *** (Визит.КодВизита Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Визит.КодВизита Set start)

                // *** End programmer edit section *** (Визит.КодВизита Set start)
                this.fКодВизита = value;
                // *** Start programmer edit section *** (Визит.КодВизита Set end)

                // *** End programmer edit section *** (Визит.КодВизита Set end)
            }
        }
        
        /// <summary>
        /// КонецСеанса.
        /// </summary>
        // *** Start programmer edit section *** (Визит.КонецСеанса CustomAttributes)

        // *** End programmer edit section *** (Визит.КонецСеанса CustomAttributes)
        [StrLen(255)]
        public virtual string КонецСеанса
        {
            get
            {
                // *** Start programmer edit section *** (Визит.КонецСеанса Get start)

                // *** End programmer edit section *** (Визит.КонецСеанса Get start)
                string result = this.fКонецСеанса;
                // *** Start programmer edit section *** (Визит.КонецСеанса Get end)

                // *** End programmer edit section *** (Визит.КонецСеанса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Визит.КонецСеанса Set start)

                // *** End programmer edit section *** (Визит.КонецСеанса Set start)
                this.fКонецСеанса = value;
                // *** Start programmer edit section *** (Визит.КонецСеанса Set end)

                // *** End programmer edit section *** (Визит.КонецСеанса Set end)
            }
        }
        
        /// <summary>
        /// НачалоСеанса.
        /// </summary>
        // *** Start programmer edit section *** (Визит.НачалоСеанса CustomAttributes)

        // *** End programmer edit section *** (Визит.НачалоСеанса CustomAttributes)
        [StrLen(255)]
        public virtual string НачалоСеанса
        {
            get
            {
                // *** Start programmer edit section *** (Визит.НачалоСеанса Get start)

                // *** End programmer edit section *** (Визит.НачалоСеанса Get start)
                string result = this.fНачалоСеанса;
                // *** Start programmer edit section *** (Визит.НачалоСеанса Get end)

                // *** End programmer edit section *** (Визит.НачалоСеанса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Визит.НачалоСеанса Set start)

                // *** End programmer edit section *** (Визит.НачалоСеанса Set start)
                this.fНачалоСеанса = value;
                // *** Start programmer edit section *** (Визит.НачалоСеанса Set end)

                // *** End programmer edit section *** (Визит.НачалоСеанса Set end)
            }
        }
        
        /// <summary>
        /// Визит.
        /// </summary>
        // *** Start programmer edit section *** (Визит.Клиент CustomAttributes)

        // *** End programmer edit section *** (Визит.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.Kursovaya_Borisova_anna.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Визит.Клиент Get start)

                // *** End programmer edit section *** (Визит.Клиент Get start)
                IIS.Kursovaya_Borisova_anna.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Визит.Клиент Get end)

                // *** End programmer edit section *** (Визит.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Визит.Клиент Set start)

                // *** End programmer edit section *** (Визит.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Визит.Клиент Set end)

                // *** End programmer edit section *** (Визит.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Визит.
        /// </summary>
        // *** Start programmer edit section *** (Визит.ЗаписьВизита CustomAttributes)

        // *** End programmer edit section *** (Визит.ЗаписьВизита CustomAttributes)
        public virtual IIS.Kursovaya_Borisova_anna.DetailArrayOfЗаписьВизита ЗаписьВизита
        {
            get
            {
                // *** Start programmer edit section *** (Визит.ЗаписьВизита Get start)

                // *** End programmer edit section *** (Визит.ЗаписьВизита Get start)
                if ((this.fЗаписьВизита == null))
                {
                    this.fЗаписьВизита = new IIS.Kursovaya_Borisova_anna.DetailArrayOfЗаписьВизита(this);
                }
                IIS.Kursovaya_Borisova_anna.DetailArrayOfЗаписьВизита result = this.fЗаписьВизита;
                // *** Start programmer edit section *** (Визит.ЗаписьВизита Get end)

                // *** End programmer edit section *** (Визит.ЗаписьВизита Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Визит.ЗаписьВизита Set start)

                // *** End programmer edit section *** (Визит.ЗаписьВизита Set start)
                this.fЗаписьВизита = value;
                // *** Start programmer edit section *** (Визит.ЗаписьВизита Set end)

                // *** End programmer edit section *** (Визит.ЗаписьВизита Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВизитE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВизитE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВизитE", typeof(IIS.Kursovaya_Borisova_anna.Визит));
                }
            }
            
            /// <summary>
            /// "ВизитL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВизитL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВизитL", typeof(IIS.Kursovaya_Borisova_anna.Визит));
                }
            }
        }
    }
}
