using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingRoom.Data
{
    public class RoomObject
    {
        public string roomId { get; set; }

        public string RoomType { get; set; }

        public string Location { get; set; }

        public int Capacity { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }

    }
}