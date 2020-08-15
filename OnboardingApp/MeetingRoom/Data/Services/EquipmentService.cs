using System.Collections.Generic;
using System.Linq;

namespace MeetingRoom.Data
{
    public class EquipmentService : IEquipmentService
    {
        public List<EquipmentObject> GetAllEquipment()
        {
            return Data.Equipment.ToList();
        }

        public void AddEquipment(EquipmentObject equipment)
        {
            Data.Equipment.Add(equipment);
        }

        public void UpdateEquipment(string equipmentId, EquipmentObject equipment)
        {
            var equipmentToUpdate = Data.Equipment.Find((v) => v.equipmentId == equipmentId);
            //FirstOrDefault(n => n.roomId == roomId);

            //rooms.Find((v) => v.roomId == id);

            if (equipmentToUpdate != null)
            {
                equipmentToUpdate.equipmentName = equipment.equipmentName;
                equipmentToUpdate.equipmentQuantity = equipment.equipmentQuantity;
            }
        }

        public void DeleteEquipment(string equipmentId)
        {
            var equipmentToDelete = Data.Equipment.Find((v) => v.equipmentId == equipmentId);
            //FirstorDefault(n => n.roomId == roomId);
            //rooms.Find((v) => v.roomId == id);

            if (equipmentToDelete != null)
            {
                Data.Equipment.Remove(equipmentToDelete);
            }
        }
    }
}