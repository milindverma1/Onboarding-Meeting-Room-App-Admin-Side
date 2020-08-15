using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingRoom.Data
{
    public class BookingObject
    {
        public string bookingId { get; set; }

        public string bookingDate { get; set; }

        public string meetingDate { get; set; }

        public string meetingTime { get; set; }

        public string employeeId { get; set; }

        public string roomId { get; set; }

        public string additionalEquipment { get; set; }

        public string requiredLayout { get; set; }
    }
}