<?php
require __DIR__ . '/vendor/autoload.php';

use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;

final class EndpointsTests extends TestCase
{

    public function testGoodsRetrive(): void
    {
        $client = new Client(['base_uri' => 'http://localhost']);
        $req = $client->get('/api/goods');
        $this->assertEquals(
            $req->getStatusCode(),200
        );
    }
}
