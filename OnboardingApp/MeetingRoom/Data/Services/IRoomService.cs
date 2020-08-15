using System.Collections.Generic;

namespace MeetingRoom.Data
{
    public interface IRoomService
    {
        List<RoomObject> GetAllRooms();

        void AddRoom(RoomObject room);

        void UpdateRoom(string roomId, RoomObject room);

        void DeleteRoom(string roomId);
    }
}