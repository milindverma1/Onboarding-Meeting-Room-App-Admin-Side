using System.Collections.Generic;
using System.Linq;

namespace MeetingRoom.Data
{
    public class BookingService : IBookingService
    {
        public List<BookingObject> GetAllBookings()
        {
            return Data.Bookings.ToList();
        }

        public void AddBooking(BookingObject booking)
        {
            Data.Bookings.Add(booking);
        }

        public void UpdateBooking(string bookingId, BookingObject booking)
        {
            var bookingToUpdate = Data.Bookings.Find((v) => v.bookingId == bookingId);
            //FirstOrDefault(n => n.roomId == roomId);

            //rooms.Find((v) => v.roomId == id);

            if (bookingToUpdate != null)
            {
                bookingToUpdate.meetingDate = booking.meetingDate;
                bookingToUpdate.meetingTime = booking.meetingTime;
                bookingToUpdate.employeeId = booking.employeeId;
                bookingToUpdate.roomId = booking.roomId;
                bookingToUpdate.additionalEquipment = booking.additionalEquipment;
                bookingToUpdate.requiredLayout = booking.requiredLayout;
            }
        }

        public void DeleteBooking(string bookingId)
        {
            var bookingToDelete = Data.Bookings.Find((v) => v.bookingId == bookingId);
            //FirstorDefault(n => n.roomId == roomId);
            //rooms.Find((v) => v.roomId == id);

            if (bookingToDelete != null)
            {
                Data.Bookings.Remove(bookingToDelete);
            }
        }
    }
}