using System.Collections.Generic;
using System.Linq;

namespace MeetingRoom.Data
{
    public class RoomService : IRoomService
    {
        public List<RoomObject> GetAllRooms()
        {
            return Data.Rooms.ToList();
        }

        public void AddRoom(RoomObject room)
        {
            Data.Rooms.Add(room);
        }

        public void UpdateRoom(string roomId, RoomObject room)
        {
            var roomToUpdate = Data.Rooms.Find((v) => v.roomId == roomId);
            //FirstOrDefault(n => n.roomId == roomId);

            //rooms.Find((v) => v.roomId == id);

            if (roomToUpdate != null)
            {
                roomToUpdate.RoomType = room.RoomType;
                roomToUpdate.Location = room.Location;
                roomToUpdate.Capacity = room.Capacity;
                roomToUpdate.Description = room.Description;
                roomToUpdate.Status = room.Status;
            }
        }

        public void DeleteRoom(string roomId)
        {
            var roomToDelete = Data.Rooms.Find((v) => v.roomId == roomId);
            //FirstorDefault(n => n.roomId == roomId);
            //rooms.Find((v) => v.roomId == id);

            if (roomToDelete != null)
            {
                Data.Rooms.Remove(roomToDelete);
            }

        }
    }
}