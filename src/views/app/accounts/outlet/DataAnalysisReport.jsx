import React, {Fragment} from 'react';
import { Table,Row, Card, CardBody } from 'reactstrap';
import { Colxx } from '../../../../components/common/CustomBootstrap';
const DataAnalysisReport = ()=> {

  return(
    <div style={{width: '100%', margin: 'auto'}} >
        <Row>
          <Colxx xxs={12}>
            <div style={{textAlign: 'center'}}>
              <h1>Data Analysis Report</h1>
            </div>
            <Table>
              <tbody>
              <tr className="text-center">
                <td><Card className="p-2">Logo Click</Card></td>
                <td><Card className="p-2">12</Card></td>
              </tr>

              <tr className="text-center">
                <td><Card className="p-2">Date Picker Click</Card></td>
                <td><Card className="p-2">07</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Confirmed reservations</Card></td>
                <td><Card className="p-2">15</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Cancelled reservations</Card></td>
                <td><Card className="p-2">03</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Logo Click</Card></td>
                <td><Card className="p-2">12</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Refunded product orders</Card></td>
                <td><Card className="p-2">00</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Re-scheduled reservations</Card></td>
                <td><Card className="p-2">01</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Product Sales</Card></td>
                <td><Card className="p-2">75</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Product Revenue</Card></td>
                <td><Card className="p-2">1200</Card></td>
              </tr>
              </tbody>
            </Table>
          </Colxx>
          <Colxx xxs={12}>
            <div style={{textAlign: 'center'}}>
              <h1>Reservations</h1>
            </div>
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Yesterday</th>
                <th>Today</th>
                <th>Last Week</th>
                <th>Last Month</th>
              </tr>
              </thead>
              <tbody>
              <tr className="text-center">
                <td><Card className="p-2">Total Confirmed Reservations</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">500</Card></td>
                <td><Card className="p-2">1000</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Total Re-Schedule</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">10</Card></td>
                <td><Card className="p-2">20</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Total Cancelled</Card></td>
                <td><Card className="p-2">0</Card></td>
                <td><Card className="p-2">0</Card></td>
                <td><Card className="p-2">0</Card></td>
                <td><Card className="p-2">0</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Tables Booked</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">500</Card></td>
                <td><Card className="p-2">1000</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Guests</Card></td>
                <td><Card className="p-2">200</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">1000</Card></td>
                <td><Card className="p-2">2000</Card></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Total Product Reservations</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">25</Card></td>
                <td><Card className="p-2">250</Card></td>
                <td><Card className="p-2">500</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Drinks Reservations</Card></td>
                <td><Card className="p-2">20</Card></td>
                <td><Card className="p-2">10</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">500</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Starter Reservations</Card></td>
                <td><Card className="p-2">10</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">100</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Mains Reservations</Card></td>
                <td><Card className="p-2">10</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">100</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Desserts Reservations</Card></td>
                <td><Card className="p-2">10</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">100</Card></td>
              </tr>

              </tbody>
            </Table>
          </Colxx>

        {/*  Data Analytics */}
          <Colxx xxs={12}>
            <div style={{textAlign: 'center'}}>
              <h1>Data Analytics</h1>
            </div>
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>9pm - 12pm</th>
                <th>12pm - 3pm</th>
                <th>3pm - 7pm</th>
                <th>7pm - 9pm</th>
              </tr>
              </thead>
              <tbody>
              <tr className="text-center">
                <td><Card className="p-2">Total Confirmed Reservations</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">500</Card></td>
                <td><Card className="p-2">1000</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Drink Reservations</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">5</Card></td>
                <td><Card className="p-2">10</Card></td>
                <td><Card className="p-2">20</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Starter Reservations</Card></td>
                <td><Card className="p-2">0</Card></td>
                <td><Card className="p-2">0</Card></td>
                <td><Card className="p-2">0</Card></td>
                <td><Card className="p-2">0</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Main Reservations</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">50</Card></td>
                <td><Card className="p-2">500</Card></td>
                <td><Card className="p-2">1000</Card></td>
              </tr>
              <tr className="text-center">
                <td><Card className="p-2">Dessert Reservations</Card></td>
                <td><Card className="p-2">200</Card></td>
                <td><Card className="p-2">100</Card></td>
                <td><Card className="p-2">1000</Card></td>
                <td><Card className="p-2">2000</Card></td>
              </tr>
              </tbody>
            </Table>
          </Colxx>
        </Row>
    </div>
  );
}
export default DataAnalysisReport;
