using System.Collections.Generic;

namespace MeetingRoom.Data
{
    public interface IEquipmentService
    {
        List<EquipmentObject> GetAllEquipment();

        void AddEquipment(EquipmentObject equipment);

        void UpdateEquipment(string equipmentId, EquipmentObject equipment);

        void DeleteEquipment(string equipmentId);
    }
}